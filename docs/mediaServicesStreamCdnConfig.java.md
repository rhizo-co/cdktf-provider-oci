# `mediaServicesStreamCdnConfig` Submodule <a name="`mediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamCdnConfig <a name="MediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfig;

MediaServicesStreamCdnConfig.Builder.create(Construct scope, java.lang.String id)
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
    .config(MediaServicesStreamCdnConfigConfigA)
    .displayName(java.lang.String)
    .distributionChannelId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesStreamCdnConfigLocks>)
//  .timeouts(MediaServicesStreamCdnConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.distributionChannelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig"></a>

```java
public void putConfig(MediaServicesStreamCdnConfigConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<MediaServicesStreamCdnConfigLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts"></a>

```java
public void putTimeouts(MediaServicesStreamCdnConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfig;

MediaServicesStreamCdnConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfig;

MediaServicesStreamCdnConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfig;

MediaServicesStreamCdnConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfig;

MediaServicesStreamCdnConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaServicesStreamCdnConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaServicesStreamCdnConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput">configInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput">distributionChannelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config"></a>

```java
public MediaServicesStreamCdnConfigConfigAOutputReference getConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks"></a>

```java
public MediaServicesStreamCdnConfigLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts"></a>

```java
public MediaServicesStreamCdnConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput"></a>

```java
public MediaServicesStreamCdnConfigConfigA getConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `distributionChannelIdInput`<sup>Optional</sup> <a name="distributionChannelIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput"></a>

```java
public java.lang.String getDistributionChannelIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```java
public java.lang.String getDistributionChannelId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamCdnConfigConfig <a name="MediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigConfig;

MediaServicesStreamCdnConfigConfig.builder()
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
    .config(MediaServicesStreamCdnConfigConfigA)
    .displayName(java.lang.String)
    .distributionChannelId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesStreamCdnConfigLocks>)
//  .timeouts(MediaServicesStreamCdnConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config"></a>

```java
public MediaServicesStreamCdnConfigConfigA getConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId"></a>

```java
public java.lang.String getDistributionChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts"></a>

```java
public MediaServicesStreamCdnConfigTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

### MediaServicesStreamCdnConfigConfigA <a name="MediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigConfigA;

MediaServicesStreamCdnConfigConfigA.builder()
    .type(java.lang.String)
//  .edgeHostname(java.lang.String)
//  .edgePathPrefix(java.lang.String)
//  .edgeTokenKey(java.lang.String)
//  .edgeTokenSalt(java.lang.String)
//  .isEdgeTokenAuth(java.lang.Boolean)
//  .isEdgeTokenAuth(IResolvable)
//  .originAuthSecretKeyA(java.lang.String)
//  .originAuthSecretKeyB(java.lang.String)
//  .originAuthSecretKeyNonceA(java.lang.String)
//  .originAuthSecretKeyNonceB(java.lang.String)
//  .originAuthSignEncryption(java.lang.String)
//  .originAuthSignType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname">edgeHostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix">edgePathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey">edgeTokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt">edgeTokenSalt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth">isEdgeTokenAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA">originAuthSecretKeyA</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB">originAuthSecretKeyB</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA">originAuthSecretKeyNonceA</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB">originAuthSecretKeyNonceB</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption">originAuthSignEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType">originAuthSignType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `edgeHostname`<sup>Optional</sup> <a name="edgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname"></a>

```java
public java.lang.String getEdgeHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

##### `edgePathPrefix`<sup>Optional</sup> <a name="edgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix"></a>

```java
public java.lang.String getEdgePathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

##### `edgeTokenKey`<sup>Optional</sup> <a name="edgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey"></a>

```java
public java.lang.String getEdgeTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

##### `edgeTokenSalt`<sup>Optional</sup> <a name="edgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt"></a>

```java
public java.lang.String getEdgeTokenSalt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

##### `isEdgeTokenAuth`<sup>Optional</sup> <a name="isEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth"></a>

```java
public java.lang.Object getIsEdgeTokenAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

##### `originAuthSecretKeyA`<sup>Optional</sup> <a name="originAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA"></a>

```java
public java.lang.String getOriginAuthSecretKeyA();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

##### `originAuthSecretKeyB`<sup>Optional</sup> <a name="originAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB"></a>

```java
public java.lang.String getOriginAuthSecretKeyB();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

##### `originAuthSecretKeyNonceA`<sup>Optional</sup> <a name="originAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceA();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

##### `originAuthSecretKeyNonceB`<sup>Optional</sup> <a name="originAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceB();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

##### `originAuthSignEncryption`<sup>Optional</sup> <a name="originAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption"></a>

```java
public java.lang.String getOriginAuthSignEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

##### `originAuthSignType`<sup>Optional</sup> <a name="originAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType"></a>

```java
public java.lang.String getOriginAuthSignType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

### MediaServicesStreamCdnConfigLocks <a name="MediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigLocks;

MediaServicesStreamCdnConfigLocks.builder()
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
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}.

---

### MediaServicesStreamCdnConfigTimeouts <a name="MediaServicesStreamCdnConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigTimeouts;

MediaServicesStreamCdnConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamCdnConfigConfigAOutputReference <a name="MediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigConfigAOutputReference;

new MediaServicesStreamCdnConfigConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname">resetEdgeHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix">resetEdgePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey">resetEdgeTokenKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt">resetEdgeTokenSalt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth">resetIsEdgeTokenAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA">resetOriginAuthSecretKeyA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB">resetOriginAuthSecretKeyB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA">resetOriginAuthSecretKeyNonceA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB">resetOriginAuthSecretKeyNonceB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption">resetOriginAuthSignEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType">resetOriginAuthSignType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEdgeHostname` <a name="resetEdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname"></a>

```java
public void resetEdgeHostname()
```

##### `resetEdgePathPrefix` <a name="resetEdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix"></a>

```java
public void resetEdgePathPrefix()
```

##### `resetEdgeTokenKey` <a name="resetEdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey"></a>

```java
public void resetEdgeTokenKey()
```

##### `resetEdgeTokenSalt` <a name="resetEdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt"></a>

```java
public void resetEdgeTokenSalt()
```

##### `resetIsEdgeTokenAuth` <a name="resetIsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth"></a>

```java
public void resetIsEdgeTokenAuth()
```

##### `resetOriginAuthSecretKeyA` <a name="resetOriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA"></a>

```java
public void resetOriginAuthSecretKeyA()
```

##### `resetOriginAuthSecretKeyB` <a name="resetOriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB"></a>

```java
public void resetOriginAuthSecretKeyB()
```

##### `resetOriginAuthSecretKeyNonceA` <a name="resetOriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA"></a>

```java
public void resetOriginAuthSecretKeyNonceA()
```

##### `resetOriginAuthSecretKeyNonceB` <a name="resetOriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB"></a>

```java
public void resetOriginAuthSecretKeyNonceB()
```

##### `resetOriginAuthSignEncryption` <a name="resetOriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption"></a>

```java
public void resetOriginAuthSignEncryption()
```

##### `resetOriginAuthSignType` <a name="resetOriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType"></a>

```java
public void resetOriginAuthSignType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput">edgeHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput">edgePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput">edgeTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput">edgeTokenSaltInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput">isEdgeTokenAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput">originAuthSecretKeyAInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput">originAuthSecretKeyBInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput">originAuthSecretKeyNonceAInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput">originAuthSecretKeyNonceBInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput">originAuthSignEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput">originAuthSignTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">edgeHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">edgePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">edgeTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">edgeTokenSalt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">isEdgeTokenAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">originAuthSecretKeyA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">originAuthSecretKeyB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">originAuthSecretKeyNonceA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">originAuthSecretKeyNonceB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">originAuthSignEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">originAuthSignType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeHostnameInput`<sup>Optional</sup> <a name="edgeHostnameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput"></a>

```java
public java.lang.String getEdgeHostnameInput();
```

- *Type:* java.lang.String

---

##### `edgePathPrefixInput`<sup>Optional</sup> <a name="edgePathPrefixInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput"></a>

```java
public java.lang.String getEdgePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `edgeTokenKeyInput`<sup>Optional</sup> <a name="edgeTokenKeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput"></a>

```java
public java.lang.String getEdgeTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `edgeTokenSaltInput`<sup>Optional</sup> <a name="edgeTokenSaltInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput"></a>

```java
public java.lang.String getEdgeTokenSaltInput();
```

- *Type:* java.lang.String

---

##### `isEdgeTokenAuthInput`<sup>Optional</sup> <a name="isEdgeTokenAuthInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput"></a>

```java
public java.lang.Object getIsEdgeTokenAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originAuthSecretKeyAInput`<sup>Optional</sup> <a name="originAuthSecretKeyAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput"></a>

```java
public java.lang.String getOriginAuthSecretKeyAInput();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyBInput`<sup>Optional</sup> <a name="originAuthSecretKeyBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput"></a>

```java
public java.lang.String getOriginAuthSecretKeyBInput();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceAInput`<sup>Optional</sup> <a name="originAuthSecretKeyNonceAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceAInput();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceBInput`<sup>Optional</sup> <a name="originAuthSecretKeyNonceBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceBInput();
```

- *Type:* java.lang.String

---

##### `originAuthSignEncryptionInput`<sup>Optional</sup> <a name="originAuthSignEncryptionInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput"></a>

```java
public java.lang.String getOriginAuthSignEncryptionInput();
```

- *Type:* java.lang.String

---

##### `originAuthSignTypeInput`<sup>Optional</sup> <a name="originAuthSignTypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput"></a>

```java
public java.lang.String getOriginAuthSignTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `edgeHostname`<sup>Required</sup> <a name="edgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```java
public java.lang.String getEdgeHostname();
```

- *Type:* java.lang.String

---

##### `edgePathPrefix`<sup>Required</sup> <a name="edgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```java
public java.lang.String getEdgePathPrefix();
```

- *Type:* java.lang.String

---

##### `edgeTokenKey`<sup>Required</sup> <a name="edgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```java
public java.lang.String getEdgeTokenKey();
```

- *Type:* java.lang.String

---

##### `edgeTokenSalt`<sup>Required</sup> <a name="edgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```java
public java.lang.String getEdgeTokenSalt();
```

- *Type:* java.lang.String

---

##### `isEdgeTokenAuth`<sup>Required</sup> <a name="isEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```java
public java.lang.Object getIsEdgeTokenAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `originAuthSecretKeyA`<sup>Required</sup> <a name="originAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```java
public java.lang.String getOriginAuthSecretKeyA();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyB`<sup>Required</sup> <a name="originAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```java
public java.lang.String getOriginAuthSecretKeyB();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceA`<sup>Required</sup> <a name="originAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceA();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceB`<sup>Required</sup> <a name="originAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceB();
```

- *Type:* java.lang.String

---

##### `originAuthSignEncryption`<sup>Required</sup> <a name="originAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```java
public java.lang.String getOriginAuthSignEncryption();
```

- *Type:* java.lang.String

---

##### `originAuthSignType`<sup>Required</sup> <a name="originAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```java
public java.lang.String getOriginAuthSignType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```java
public MediaServicesStreamCdnConfigConfigA getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---


### MediaServicesStreamCdnConfigLocksList <a name="MediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigLocksList;

new MediaServicesStreamCdnConfigLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get"></a>

```java
public MediaServicesStreamCdnConfigLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>>

---


### MediaServicesStreamCdnConfigLocksOutputReference <a name="MediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigLocksOutputReference;

new MediaServicesStreamCdnConfigLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks">MediaServicesStreamCdnConfigLocks</a>

---


### MediaServicesStreamCdnConfigTimeoutsOutputReference <a name="MediaServicesStreamCdnConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_stream_cdn_config.MediaServicesStreamCdnConfigTimeoutsOutputReference;

new MediaServicesStreamCdnConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---



