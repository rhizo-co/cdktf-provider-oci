# `dataOciWafProtectionCapabilities` Submodule <a name="`dataOciWafProtectionCapabilities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilities <a name="DataOciWafProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities oci_waf_protection_capabilities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilities;

DataOciWafProtectionCapabilities.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafProtectionCapabilitiesFilter>)
//  .groupTag(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isLatestVersion(IResolvable)
//  .isLatestVersion(java.util.List<java.lang.Boolean)
//  .isLatestVersion(IResolvable>)
//  .key(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.groupTag">groupTag</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.isLatestVersion">isLatestVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#filter DataOciWafProtectionCapabilities#filter}

---

##### `groupTag`<sup>Optional</sup> <a name="groupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.groupTag"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLatestVersion`<sup>Optional</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.isLatestVersion"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag">resetGroupTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion">resetIsLatestVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciWafProtectionCapabilitiesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupTag` <a name="resetGroupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetGroupTag"></a>

```java
public void resetGroupTag()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetId"></a>

```java
public void resetId()
```

##### `resetIsLatestVersion` <a name="resetIsLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetIsLatestVersion"></a>

```java
public void resetIsLatestVersion()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilities;

DataOciWafProtectionCapabilities.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilities;

DataOciWafProtectionCapabilities.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilities;

DataOciWafProtectionCapabilities.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilities;

DataOciWafProtectionCapabilities.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciWafProtectionCapabilities.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciWafProtectionCapabilities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciWafProtectionCapabilities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection">protectionCapabilityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput">groupTagInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput">isLatestVersionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag">groupTag</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion">isLatestVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filter"></a>

```java
public DataOciWafProtectionCapabilitiesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList">DataOciWafProtectionCapabilitiesFilterList</a>

---

##### `protectionCapabilityCollection`<sup>Required</sup> <a name="protectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.protectionCapabilityCollection"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList getProtectionCapabilityCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>>

---

##### `groupTagInput`<sup>Optional</sup> <a name="groupTagInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTagInput"></a>

```java
public java.util.List<java.lang.String> getGroupTagInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLatestVersionInput`<sup>Optional</sup> <a name="isLatestVersionInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersionInput"></a>

```java
public java.lang.Object getIsLatestVersionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupTag`<sup>Required</sup> <a name="groupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.groupTag"></a>

```java
public java.util.List<java.lang.String> getGroupTag();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.isLatestVersion"></a>

```java
public java.lang.Object getIsLatestVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilities.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilitiesConfig <a name="DataOciWafProtectionCapabilitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesConfig;

DataOciWafProtectionCapabilitiesConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafProtectionCapabilitiesFilter>)
//  .groupTag(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isLatestVersion(IResolvable)
//  .isLatestVersion(java.util.List<java.lang.Boolean)
//  .isLatestVersion(IResolvable>)
//  .key(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag">groupTag</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion">isLatestVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#compartment_id DataOciWafProtectionCapabilities#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#display_name DataOciWafProtectionCapabilities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#filter DataOciWafProtectionCapabilities#filter}

---

##### `groupTag`<sup>Optional</sup> <a name="groupTag" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.groupTag"></a>

```java
public java.util.List<java.lang.String> getGroupTag();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#group_tag DataOciWafProtectionCapabilities#group_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#id DataOciWafProtectionCapabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLatestVersion`<sup>Optional</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.isLatestVersion"></a>

```java
public java.lang.Object getIsLatestVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#is_latest_version DataOciWafProtectionCapabilities#is_latest_version}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#key DataOciWafProtectionCapabilities#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#type DataOciWafProtectionCapabilities#type}.

---

### DataOciWafProtectionCapabilitiesFilter <a name="DataOciWafProtectionCapabilitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesFilter;

DataOciWafProtectionCapabilitiesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#name DataOciWafProtectionCapabilities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#values DataOciWafProtectionCapabilities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capabilities#regex DataOciWafProtectionCapabilities#regex}.

---

### DataOciWafProtectionCapabilitiesProtectionCapabilityCollection <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection;

DataOciWafProtectionCapabilitiesProtectionCapabilityCollection.builder()
    .build();
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems;

DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems.builder()
    .build();
```


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights;

DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilitiesFilterList <a name="DataOciWafProtectionCapabilitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesFilterList;

new DataOciWafProtectionCapabilitiesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get"></a>

```java
public DataOciWafProtectionCapabilitiesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>>

---


### DataOciWafProtectionCapabilitiesFilterOutputReference <a name="DataOciWafProtectionCapabilitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesFilterOutputReference;

new DataOciWafProtectionCapabilitiesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesFilter">DataOciWafProtectionCapabilitiesFilter</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsOutputReference.property.internalValue"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeights</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags">groupTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion">isLatestVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeActionThreshold"></a>

```java
public java.lang.Number getCollaborativeActionThreshold();
```

- *Type:* java.lang.Number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.collaborativeWeights"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList getCollaborativeWeights();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsCollaborativeWeightsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `groupTags`<sup>Required</sup> <a name="groupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.groupTags"></a>

```java
public java.util.List<java.lang.String> getGroupTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.isLatestVersion"></a>

```java
public IResolvable getIsLatestVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItems</a>

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference <a name="DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference;

new DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.items"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList">DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollectionOutputReference.property.internalValue"></a>

```java
public DataOciWafProtectionCapabilitiesProtectionCapabilityCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilities.DataOciWafProtectionCapabilitiesProtectionCapabilityCollection">DataOciWafProtectionCapabilitiesProtectionCapabilityCollection</a>

---



