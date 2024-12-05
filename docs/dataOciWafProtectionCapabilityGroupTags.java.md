# `dataOciWafProtectionCapabilityGroupTags` Submodule <a name="`dataOciWafProtectionCapabilityGroupTags` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilityGroupTags <a name="DataOciWafProtectionCapabilityGroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags oci_waf_protection_capability_group_tags}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTags;

DataOciWafProtectionCapabilityGroupTags.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafProtectionCapabilityGroupTagsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciWafProtectionCapabilityGroupTagsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTags;

DataOciWafProtectionCapabilityGroupTags.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTags;

DataOciWafProtectionCapabilityGroupTags.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTags;

DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTags;

DataOciWafProtectionCapabilityGroupTags.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciWafProtectionCapabilityGroupTags.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciWafProtectionCapabilityGroupTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciWafProtectionCapabilityGroupTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilityGroupTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection">protectionCapabilityGroupTagCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a>

---

##### `protectionCapabilityGroupTagCollection`<sup>Required</sup> <a name="protectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList getProtectionCapabilityGroupTagCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilityGroupTagsConfig <a name="DataOciWafProtectionCapabilityGroupTagsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsConfig;

DataOciWafProtectionCapabilityGroupTagsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciWafProtectionCapabilityGroupTagsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

### DataOciWafProtectionCapabilityGroupTagsFilter <a name="DataOciWafProtectionCapabilityGroupTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsFilter;

DataOciWafProtectionCapabilityGroupTagsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}.

---

### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection;

DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.builder()
    .build();
```


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems;

DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilityGroupTagsFilterList <a name="DataOciWafProtectionCapabilityGroupTagsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsFilterList;

new DataOciWafProtectionCapabilityGroupTagsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>>

---


### DataOciWafProtectionCapabilityGroupTagsFilterOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference;

new DataOciWafProtectionCapabilityGroupTagsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_protection_capability_group_tags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue"></a>

```java
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a>

---



