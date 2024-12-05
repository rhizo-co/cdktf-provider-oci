# `dataOciCoreCaptureFilters` Submodule <a name="`dataOciCoreCaptureFilters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCaptureFilters <a name="DataOciCoreCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters oci_core_capture_filters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFilters;

DataOciCoreCaptureFilters.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciCoreCaptureFiltersFilter>)
//  .filterType(java.lang.String)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter DataOciCoreCaptureFilters#filter}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.filterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreCaptureFiltersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFilterType` <a name="resetFilterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetFilterType"></a>

```java
public void resetFilterType()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCaptureFilters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFilters;

DataOciCoreCaptureFilters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFilters;

DataOciCoreCaptureFilters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFilters;

DataOciCoreCaptureFilters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFilters;

DataOciCoreCaptureFilters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreCaptureFilters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreCaptureFilters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreCaptureFilters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreCaptureFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCaptureFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.captureFilters">captureFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList">DataOciCoreCaptureFiltersCaptureFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList">DataOciCoreCaptureFiltersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `captureFilters`<sup>Required</sup> <a name="captureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.captureFilters"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersList getCaptureFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList">DataOciCoreCaptureFiltersCaptureFiltersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filter"></a>

```java
public DataOciCoreCaptureFiltersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList">DataOciCoreCaptureFiltersFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>>

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFilters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCaptureFiltersCaptureFilters <a name="DataOciCoreCaptureFiltersCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFilters;

DataOciCoreCaptureFiltersCaptureFilters.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;

DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange;

DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange.builder()
    .build();
```


### DataOciCoreCaptureFiltersConfig <a name="DataOciCoreCaptureFiltersConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersConfig;

DataOciCoreCaptureFiltersConfig.builder()
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
//  .filter(java.util.List<DataOciCoreCaptureFiltersFilter>)
//  .filterType(java.lang.String)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#compartment_id DataOciCoreCaptureFilters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#display_name DataOciCoreCaptureFilters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter DataOciCoreCaptureFilters#filter}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#filter_type DataOciCoreCaptureFilters#filter_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#id DataOciCoreCaptureFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#state DataOciCoreCaptureFilters#state}.

---

### DataOciCoreCaptureFiltersFilter <a name="DataOciCoreCaptureFiltersFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersFilter;

DataOciCoreCaptureFiltersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#name DataOciCoreCaptureFilters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#values DataOciCoreCaptureFilters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#regex DataOciCoreCaptureFilters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#name DataOciCoreCaptureFilters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#values DataOciCoreCaptureFilters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_capture_filters#regex DataOciCoreCaptureFilters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.flowLogType">flowLogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

---

##### `flowLogType`<sup>Required</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```java
public java.lang.String getFlowLogType();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesIcmpOptionsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRules</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersList <a name="DataOciCoreCaptureFiltersCaptureFiltersList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersList;

new DataOciCoreCaptureFiltersCaptureFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters">DataOciCoreCaptureFiltersCaptureFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `flowLogCaptureFilterRules`<sup>Required</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.flowLogCaptureFilterRules"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList getFlowLogCaptureFilterRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersFlowLogCaptureFilterRulesList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `vtapCaptureFilterRules`<sup>Required</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.vtapCaptureFilterRules"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList getVtapCaptureFilterRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFilters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFilters">DataOciCoreCaptureFiltersCaptureFilters</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.trafficDirection">trafficDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesIcmpOptionsList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList</a>

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```java
public java.lang.String getTrafficDirection();
```

- *Type:* java.lang.String

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRules</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsDestinationPortRangeList</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptions</a>

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;

new DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange">DataOciCoreCaptureFiltersCaptureFiltersVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### DataOciCoreCaptureFiltersFilterList <a name="DataOciCoreCaptureFiltersFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersFilterList;

new DataOciCoreCaptureFiltersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get"></a>

```java
public DataOciCoreCaptureFiltersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>>

---


### DataOciCoreCaptureFiltersFilterOutputReference <a name="DataOciCoreCaptureFiltersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_capture_filters.DataOciCoreCaptureFiltersFilterOutputReference;

new DataOciCoreCaptureFiltersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCaptureFilters.DataOciCoreCaptureFiltersFilter">DataOciCoreCaptureFiltersFilter</a>

---



