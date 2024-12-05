# `mediaServicesStreamDistributionChannel` Submodule <a name="`mediaServicesStreamDistributionChannel` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamDistributionChannel <a name="MediaServicesStreamDistributionChannel" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel oci_media_services_stream_distribution_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannel;

MediaServicesStreamDistributionChannel.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesStreamDistributionChannelLocks>)
//  .timeouts(MediaServicesStreamDistributionChannelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#display_name MediaServicesStreamDistributionChannel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#defined_tags MediaServicesStreamDistributionChannel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#freeform_tags MediaServicesStreamDistributionChannel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#id MediaServicesStreamDistributionChannel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#is_lock_override MediaServicesStreamDistributionChannel#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#display_name MediaServicesStreamDistributionChannel#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#defined_tags MediaServicesStreamDistributionChannel#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#freeform_tags MediaServicesStreamDistributionChannel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#id MediaServicesStreamDistributionChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#is_lock_override MediaServicesStreamDistributionChannel#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#locks MediaServicesStreamDistributionChannel#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#timeouts MediaServicesStreamDistributionChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<MediaServicesStreamDistributionChannelLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putTimeouts"></a>

```java
public void putTimeouts(MediaServicesStreamDistributionChannelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannel;

MediaServicesStreamDistributionChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannel;

MediaServicesStreamDistributionChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannel;

MediaServicesStreamDistributionChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannel;

MediaServicesStreamDistributionChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaServicesStreamDistributionChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaServicesStreamDistributionChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaServicesStreamDistributionChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamDistributionChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList">MediaServicesStreamDistributionChannelLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference">MediaServicesStreamDistributionChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.locks"></a>

```java
public MediaServicesStreamDistributionChannelLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList">MediaServicesStreamDistributionChannelLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeouts"></a>

```java
public MediaServicesStreamDistributionChannelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference">MediaServicesStreamDistributionChannelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamDistributionChannelConfig <a name="MediaServicesStreamDistributionChannelConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelConfig;

MediaServicesStreamDistributionChannelConfig.builder()
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
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesStreamDistributionChannelLocks>)
//  .timeouts(MediaServicesStreamDistributionChannelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#display_name MediaServicesStreamDistributionChannel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#defined_tags MediaServicesStreamDistributionChannel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#freeform_tags MediaServicesStreamDistributionChannel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#id MediaServicesStreamDistributionChannel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#is_lock_override MediaServicesStreamDistributionChannel#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#display_name MediaServicesStreamDistributionChannel#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#defined_tags MediaServicesStreamDistributionChannel#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#freeform_tags MediaServicesStreamDistributionChannel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#id MediaServicesStreamDistributionChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#is_lock_override MediaServicesStreamDistributionChannel#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#locks MediaServicesStreamDistributionChannel#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelConfig.property.timeouts"></a>

```java
public MediaServicesStreamDistributionChannelTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#timeouts MediaServicesStreamDistributionChannel#timeouts}

---

### MediaServicesStreamDistributionChannelLocks <a name="MediaServicesStreamDistributionChannelLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelLocks;

MediaServicesStreamDistributionChannelLocks.builder()
    .compartmentId(java.lang.String)
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
//  .timeCreated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#type MediaServicesStreamDistributionChannel#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#message MediaServicesStreamDistributionChannel#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#related_resource_id MediaServicesStreamDistributionChannel#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#time_created MediaServicesStreamDistributionChannel#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#compartment_id MediaServicesStreamDistributionChannel#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#type MediaServicesStreamDistributionChannel#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#message MediaServicesStreamDistributionChannel#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#related_resource_id MediaServicesStreamDistributionChannel#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#time_created MediaServicesStreamDistributionChannel#time_created}.

---

### MediaServicesStreamDistributionChannelTimeouts <a name="MediaServicesStreamDistributionChannelTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelTimeouts;

MediaServicesStreamDistributionChannelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#create MediaServicesStreamDistributionChannel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#delete MediaServicesStreamDistributionChannel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#update MediaServicesStreamDistributionChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#create MediaServicesStreamDistributionChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#delete MediaServicesStreamDistributionChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_distribution_channel#update MediaServicesStreamDistributionChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamDistributionChannelLocksList <a name="MediaServicesStreamDistributionChannelLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelLocksList;

new MediaServicesStreamDistributionChannelLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.get"></a>

```java
public MediaServicesStreamDistributionChannelLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>>

---


### MediaServicesStreamDistributionChannelLocksOutputReference <a name="MediaServicesStreamDistributionChannelLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelLocksOutputReference;

new MediaServicesStreamDistributionChannelLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelLocks">MediaServicesStreamDistributionChannelLocks</a>

---


### MediaServicesStreamDistributionChannelTimeoutsOutputReference <a name="MediaServicesStreamDistributionChannelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_distribution_channel.MediaServicesStreamDistributionChannelTimeoutsOutputReference;

new MediaServicesStreamDistributionChannelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamDistributionChannel.MediaServicesStreamDistributionChannelTimeouts">MediaServicesStreamDistributionChannelTimeouts</a>

---



