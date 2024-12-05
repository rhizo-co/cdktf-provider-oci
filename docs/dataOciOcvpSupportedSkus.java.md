# `dataOciOcvpSupportedSkus` Submodule <a name="`dataOciOcvpSupportedSkus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedSkus <a name="DataOciOcvpSupportedSkus" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus oci_ocvp_supported_skus}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkus;

DataOciOcvpSupportedSkus.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciOcvpSupportedSkusFilter>)
//  .hostShapeName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#compartment_id DataOciOcvpSupportedSkus#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#host_shape_name DataOciOcvpSupportedSkus#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#id DataOciOcvpSupportedSkus#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#compartment_id DataOciOcvpSupportedSkus#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#filter DataOciOcvpSupportedSkus#filter}

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.hostShapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#host_shape_name DataOciOcvpSupportedSkus#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#id DataOciOcvpSupportedSkus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetHostShapeName">resetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOcvpSupportedSkusFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetHostShapeName` <a name="resetHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetHostShapeName"></a>

```java
public void resetHostShapeName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedSkus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkus;

DataOciOcvpSupportedSkus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkus;

DataOciOcvpSupportedSkus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkus;

DataOciOcvpSupportedSkus.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkus;

DataOciOcvpSupportedSkus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOcvpSupportedSkus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOcvpSupportedSkus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOcvpSupportedSkus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOcvpSupportedSkus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedSkus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList">DataOciOcvpSupportedSkusFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList">DataOciOcvpSupportedSkusItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.hostShapeNameInput">hostShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.filter"></a>

```java
public DataOciOcvpSupportedSkusFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList">DataOciOcvpSupportedSkusFilterList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.items"></a>

```java
public DataOciOcvpSupportedSkusItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList">DataOciOcvpSupportedSkusItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>>

---

##### `hostShapeNameInput`<sup>Optional</sup> <a name="hostShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.hostShapeNameInput"></a>

```java
public java.lang.String getHostShapeNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.hostShapeName"></a>

```java
public java.lang.String getHostShapeName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedSkusConfig <a name="DataOciOcvpSupportedSkusConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusConfig;

DataOciOcvpSupportedSkusConfig.builder()
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
//  .filter(java.util.List<DataOciOcvpSupportedSkusFilter>)
//  .hostShapeName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#compartment_id DataOciOcvpSupportedSkus#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#host_shape_name DataOciOcvpSupportedSkus#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#id DataOciOcvpSupportedSkus#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#compartment_id DataOciOcvpSupportedSkus#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#filter DataOciOcvpSupportedSkus#filter}

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.hostShapeName"></a>

```java
public java.lang.String getHostShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#host_shape_name DataOciOcvpSupportedSkus#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#id DataOciOcvpSupportedSkus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOcvpSupportedSkusFilter <a name="DataOciOcvpSupportedSkusFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusFilter;

DataOciOcvpSupportedSkusFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#name DataOciOcvpSupportedSkus#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#values DataOciOcvpSupportedSkus#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#regex DataOciOcvpSupportedSkus#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#name DataOciOcvpSupportedSkus#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#values DataOciOcvpSupportedSkus#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_skus#regex DataOciOcvpSupportedSkus#regex}.

---

### DataOciOcvpSupportedSkusItems <a name="DataOciOcvpSupportedSkusItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusItems;

DataOciOcvpSupportedSkusItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedSkusFilterList <a name="DataOciOcvpSupportedSkusFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusFilterList;

new DataOciOcvpSupportedSkusFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.get"></a>

```java
public DataOciOcvpSupportedSkusFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>>

---


### DataOciOcvpSupportedSkusFilterOutputReference <a name="DataOciOcvpSupportedSkusFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusFilterOutputReference;

new DataOciOcvpSupportedSkusFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusFilter">DataOciOcvpSupportedSkusFilter</a>

---


### DataOciOcvpSupportedSkusItemsList <a name="DataOciOcvpSupportedSkusItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusItemsList;

new DataOciOcvpSupportedSkusItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.get"></a>

```java
public DataOciOcvpSupportedSkusItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSupportedSkusItemsOutputReference <a name="DataOciOcvpSupportedSkusItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_supported_skus.DataOciOcvpSupportedSkusItemsOutputReference;

new DataOciOcvpSupportedSkusItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItems">DataOciOcvpSupportedSkusItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItemsOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSupportedSkusItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedSkus.DataOciOcvpSupportedSkusItems">DataOciOcvpSupportedSkusItems</a>

---


