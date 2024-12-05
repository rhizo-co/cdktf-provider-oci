# `streamingStreamPool` Submodule <a name="`streamingStreamPool` Submodule" id="rhizo-co-terraform-provider-oci.streamingStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamingStreamPool <a name="StreamingStreamPool" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool oci_streaming_stream_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPool;

StreamingStreamPool.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .customEncryptionKey(StreamingStreamPoolCustomEncryptionKey)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kafkaSettings(StreamingStreamPoolKafkaSettings)
//  .privateEndpointSettings(StreamingStreamPoolPrivateEndpointSettings)
//  .timeouts(StreamingStreamPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | custom_encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | private_endpoint_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}.

---

##### `customEncryptionKey`<sup>Optional</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.customEncryptionKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

custom_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}

---

##### `privateEndpointSettings`<sup>Optional</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.privateEndpointSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

private_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey">putCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings">putPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey">resetCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings">resetPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomEncryptionKey` <a name="putCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey"></a>

```java
public void putCustomEncryptionKey(StreamingStreamPoolCustomEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings"></a>

```java
public void putKafkaSettings(StreamingStreamPoolKafkaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---

##### `putPrivateEndpointSettings` <a name="putPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings"></a>

```java
public void putPrivateEndpointSettings(StreamingStreamPoolPrivateEndpointSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts"></a>

```java
public void putTimeouts(StreamingStreamPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---

##### `resetCustomEncryptionKey` <a name="resetCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey"></a>

```java
public void resetCustomEncryptionKey()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId"></a>

```java
public void resetId()
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings"></a>

```java
public void resetKafkaSettings()
```

##### `resetPrivateEndpointSettings` <a name="resetPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings"></a>

```java
public void resetPrivateEndpointSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPool;

StreamingStreamPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPool;

StreamingStreamPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPool;

StreamingStreamPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPool;

StreamingStreamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamingStreamPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamingStreamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamingStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamingStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn">endpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate">isPrivate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput">customEncryptionKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput">privateEndpointSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customEncryptionKey`<sup>Required</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey"></a>

```java
public StreamingStreamPoolCustomEncryptionKeyOutputReference getCustomEncryptionKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a>

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn"></a>

```java
public java.lang.String getEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate"></a>

```java
public IResolvable getIsPrivate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings"></a>

```java
public StreamingStreamPoolKafkaSettingsOutputReference getKafkaSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `privateEndpointSettings`<sup>Required</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings"></a>

```java
public StreamingStreamPoolPrivateEndpointSettingsOutputReference getPrivateEndpointSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts"></a>

```java
public StreamingStreamPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `customEncryptionKeyInput`<sup>Optional</sup> <a name="customEncryptionKeyInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput"></a>

```java
public StreamingStreamPoolCustomEncryptionKey getCustomEncryptionKeyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput"></a>

```java
public StreamingStreamPoolKafkaSettings getKafkaSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointSettingsInput`<sup>Optional</sup> <a name="privateEndpointSettingsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput"></a>

```java
public StreamingStreamPoolPrivateEndpointSettings getPrivateEndpointSettingsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamingStreamPoolConfig <a name="StreamingStreamPoolConfig" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolConfig;

StreamingStreamPoolConfig.builder()
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
    .name(java.lang.String)
//  .customEncryptionKey(StreamingStreamPoolCustomEncryptionKey)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kafkaSettings(StreamingStreamPoolKafkaSettings)
//  .privateEndpointSettings(StreamingStreamPoolPrivateEndpointSettings)
//  .timeouts(StreamingStreamPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey">customEncryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | custom_encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings">privateEndpointSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | private_endpoint_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}.

---

##### `customEncryptionKey`<sup>Optional</sup> <a name="customEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey"></a>

```java
public StreamingStreamPoolCustomEncryptionKey getCustomEncryptionKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

custom_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings"></a>

```java
public StreamingStreamPoolKafkaSettings getKafkaSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}

---

##### `privateEndpointSettings`<sup>Optional</sup> <a name="privateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings"></a>

```java
public StreamingStreamPoolPrivateEndpointSettings getPrivateEndpointSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

private_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts"></a>

```java
public StreamingStreamPoolTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}

---

### StreamingStreamPoolCustomEncryptionKey <a name="StreamingStreamPoolCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolCustomEncryptionKey;

StreamingStreamPoolCustomEncryptionKey.builder()
    .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}. |

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}.

---

### StreamingStreamPoolKafkaSettings <a name="StreamingStreamPoolKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolKafkaSettings;

StreamingStreamPoolKafkaSettings.builder()
//  .autoCreateTopicsEnable(java.lang.Boolean)
//  .autoCreateTopicsEnable(IResolvable)
//  .logRetentionHours(java.lang.Number)
//  .numPartitions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours">logRetentionHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions">numPartitions</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}. |

---

##### `autoCreateTopicsEnable`<sup>Optional</sup> <a name="autoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable"></a>

```java
public java.lang.Object getAutoCreateTopicsEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}.

---

##### `logRetentionHours`<sup>Optional</sup> <a name="logRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours"></a>

```java
public java.lang.Number getLogRetentionHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}.

---

##### `numPartitions`<sup>Optional</sup> <a name="numPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions"></a>

```java
public java.lang.Number getNumPartitions();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}.

---

### StreamingStreamPoolPrivateEndpointSettings <a name="StreamingStreamPoolPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolPrivateEndpointSettings;

StreamingStreamPoolPrivateEndpointSettings.builder()
//  .nsgIds(java.util.List<java.lang.String>)
//  .privateEndpointIp(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}. |

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}.

---

### StreamingStreamPoolTimeouts <a name="StreamingStreamPoolTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolTimeouts;

StreamingStreamPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamingStreamPoolCustomEncryptionKeyOutputReference <a name="StreamingStreamPoolCustomEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolCustomEncryptionKeyOutputReference;

new StreamingStreamPoolCustomEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState">keyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState"></a>

```java
public java.lang.String getKeyState();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue"></a>

```java
public StreamingStreamPoolCustomEncryptionKey getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---


### StreamingStreamPoolKafkaSettingsOutputReference <a name="StreamingStreamPoolKafkaSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolKafkaSettingsOutputReference;

new StreamingStreamPoolKafkaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable">resetAutoCreateTopicsEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours">resetLogRetentionHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions">resetNumPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoCreateTopicsEnable` <a name="resetAutoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable"></a>

```java
public void resetAutoCreateTopicsEnable()
```

##### `resetLogRetentionHours` <a name="resetLogRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours"></a>

```java
public void resetLogRetentionHours()
```

##### `resetNumPartitions` <a name="resetNumPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions"></a>

```java
public void resetNumPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput">autoCreateTopicsEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput">logRetentionHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput">numPartitionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable">autoCreateTopicsEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours">logRetentionHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions">numPartitions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers"></a>

```java
public java.lang.String getBootstrapServers();
```

- *Type:* java.lang.String

---

##### `autoCreateTopicsEnableInput`<sup>Optional</sup> <a name="autoCreateTopicsEnableInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput"></a>

```java
public java.lang.Object getAutoCreateTopicsEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRetentionHoursInput`<sup>Optional</sup> <a name="logRetentionHoursInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput"></a>

```java
public java.lang.Number getLogRetentionHoursInput();
```

- *Type:* java.lang.Number

---

##### `numPartitionsInput`<sup>Optional</sup> <a name="numPartitionsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput"></a>

```java
public java.lang.Number getNumPartitionsInput();
```

- *Type:* java.lang.Number

---

##### `autoCreateTopicsEnable`<sup>Required</sup> <a name="autoCreateTopicsEnable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable"></a>

```java
public java.lang.Object getAutoCreateTopicsEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logRetentionHours`<sup>Required</sup> <a name="logRetentionHours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours"></a>

```java
public java.lang.Number getLogRetentionHours();
```

- *Type:* java.lang.Number

---

##### `numPartitions`<sup>Required</sup> <a name="numPartitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions"></a>

```java
public java.lang.Number getNumPartitions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue"></a>

```java
public StreamingStreamPoolKafkaSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---


### StreamingStreamPoolPrivateEndpointSettingsOutputReference <a name="StreamingStreamPoolPrivateEndpointSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolPrivateEndpointSettingsOutputReference;

new StreamingStreamPoolPrivateEndpointSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp"></a>

```java
public void resetPrivateEndpointIp()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput"></a>

```java
public java.lang.String getPrivateEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue"></a>

```java
public StreamingStreamPoolPrivateEndpointSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---


### StreamingStreamPoolTimeoutsOutputReference <a name="StreamingStreamPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.streaming_stream_pool.StreamingStreamPoolTimeoutsOutputReference;

new StreamingStreamPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

---



