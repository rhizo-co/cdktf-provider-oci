# `dataOciMediaServicesStreamCdnConfigs` Submodule <a name="`dataOciMediaServicesStreamCdnConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamCdnConfigs <a name="DataOciMediaServicesStreamCdnConfigs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs oci_media_services_stream_cdn_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigs;

DataOciMediaServicesStreamCdnConfigs.Builder.create(Construct scope, java.lang.String id)
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
    .distributionChannelId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMediaServicesStreamCdnConfigsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.distributionChannelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#filter DataOciMediaServicesStreamCdnConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMediaServicesStreamCdnConfigsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigs;

DataOciMediaServicesStreamCdnConfigs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigs;

DataOciMediaServicesStreamCdnConfigs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigs;

DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigs;

DataOciMediaServicesStreamCdnConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMediaServicesStreamCdnConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMediaServicesStreamCdnConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMediaServicesStreamCdnConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamCdnConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList">DataOciMediaServicesStreamCdnConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.streamCdnConfigCollection">streamCdnConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelIdInput">distributionChannelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filter"></a>

```java
public DataOciMediaServicesStreamCdnConfigsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList">DataOciMediaServicesStreamCdnConfigsFilterList</a>

---

##### `streamCdnConfigCollection`<sup>Required</sup> <a name="streamCdnConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.streamCdnConfigCollection"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList getStreamCdnConfigCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `distributionChannelIdInput`<sup>Optional</sup> <a name="distributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelIdInput"></a>

```java
public java.lang.String getDistributionChannelIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.distributionChannelId"></a>

```java
public java.lang.String getDistributionChannelId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamCdnConfigsConfig <a name="DataOciMediaServicesStreamCdnConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsConfig;

DataOciMediaServicesStreamCdnConfigsConfig.builder()
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
    .distributionChannelId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMediaServicesStreamCdnConfigsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.distributionChannelId"></a>

```java
public java.lang.String getDistributionChannelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#distribution_channel_id DataOciMediaServicesStreamCdnConfigs#distribution_channel_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#display_name DataOciMediaServicesStreamCdnConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#filter DataOciMediaServicesStreamCdnConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#id DataOciMediaServicesStreamCdnConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#state DataOciMediaServicesStreamCdnConfigs#state}.

---

### DataOciMediaServicesStreamCdnConfigsFilter <a name="DataOciMediaServicesStreamCdnConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsFilter;

DataOciMediaServicesStreamCdnConfigsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#name DataOciMediaServicesStreamCdnConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#values DataOciMediaServicesStreamCdnConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#regex DataOciMediaServicesStreamCdnConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#name DataOciMediaServicesStreamCdnConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#values DataOciMediaServicesStreamCdnConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_configs#regex DataOciMediaServicesStreamCdnConfigs#regex}.

---

### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection;

DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection.builder()
    .build();
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems;

DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems.builder()
    .build();
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig;

DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig.builder()
    .build();
```


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks;

DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamCdnConfigsFilterList <a name="DataOciMediaServicesStreamCdnConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsFilterList;

new DataOciMediaServicesStreamCdnConfigsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get"></a>

```java
public DataOciMediaServicesStreamCdnConfigsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>>

---


### DataOciMediaServicesStreamCdnConfigsFilterOutputReference <a name="DataOciMediaServicesStreamCdnConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference;

new DataOciMediaServicesStreamCdnConfigsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsFilter">DataOciMediaServicesStreamCdnConfigsFilter</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeHostname">edgeHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgePathPrefix">edgePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenKey">edgeTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenSalt">edgeTokenSalt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.isEdgeTokenAuth">isEdgeTokenAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyA">originAuthSecretKeyA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyB">originAuthSecretKeyB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceA">originAuthSecretKeyNonceA</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceB">originAuthSecretKeyNonceB</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignEncryption">originAuthSignEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignType">originAuthSignType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `edgeHostname`<sup>Required</sup> <a name="edgeHostname" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeHostname"></a>

```java
public java.lang.String getEdgeHostname();
```

- *Type:* java.lang.String

---

##### `edgePathPrefix`<sup>Required</sup> <a name="edgePathPrefix" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgePathPrefix"></a>

```java
public java.lang.String getEdgePathPrefix();
```

- *Type:* java.lang.String

---

##### `edgeTokenKey`<sup>Required</sup> <a name="edgeTokenKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenKey"></a>

```java
public java.lang.String getEdgeTokenKey();
```

- *Type:* java.lang.String

---

##### `edgeTokenSalt`<sup>Required</sup> <a name="edgeTokenSalt" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.edgeTokenSalt"></a>

```java
public java.lang.String getEdgeTokenSalt();
```

- *Type:* java.lang.String

---

##### `isEdgeTokenAuth`<sup>Required</sup> <a name="isEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.isEdgeTokenAuth"></a>

```java
public IResolvable getIsEdgeTokenAuth();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `originAuthSecretKeyA`<sup>Required</sup> <a name="originAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyA"></a>

```java
public java.lang.String getOriginAuthSecretKeyA();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyB`<sup>Required</sup> <a name="originAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyB"></a>

```java
public java.lang.String getOriginAuthSecretKeyB();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceA`<sup>Required</sup> <a name="originAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceA"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceA();
```

- *Type:* java.lang.String

---

##### `originAuthSecretKeyNonceB`<sup>Required</sup> <a name="originAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSecretKeyNonceB"></a>

```java
public java.lang.String getOriginAuthSecretKeyNonceB();
```

- *Type:* java.lang.String

---

##### `originAuthSignEncryption`<sup>Required</sup> <a name="originAuthSignEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignEncryption"></a>

```java
public java.lang.String getOriginAuthSignEncryption();
```

- *Type:* java.lang.String

---

##### `originAuthSignType`<sup>Required</sup> <a name="originAuthSignType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.originAuthSignType"></a>

```java
public java.lang.String getOriginAuthSignType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigOutputReference.property.internalValue"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfig</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksOutputReference.property.internalValue"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.distributionChannelId">distributionChannelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.config"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList getConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsConfigList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `distributionChannelId`<sup>Required</sup> <a name="distributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.distributionChannelId"></a>

```java
public java.lang.String getDistributionChannelId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.isLockOverride"></a>

```java
public IResolvable getIsLockOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.locks"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItems</a>

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference <a name="DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_media_services_stream_cdn_configs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference;

new DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.items"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollectionOutputReference.property.internalValue"></a>

```java
public DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfigs.DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection">DataOciMediaServicesStreamCdnConfigsStreamCdnConfigCollection</a>

---



