# `dataOciCoreByoipAllocatedRanges` Submodule <a name="`dataOciCoreByoipAllocatedRanges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreByoipAllocatedRanges <a name="DataOciCoreByoipAllocatedRanges" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges oci_core_byoip_allocated_ranges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRanges;

DataOciCoreByoipAllocatedRanges.Builder.create(Construct scope, java.lang.String id)
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
    .byoipRangeId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreByoipAllocatedRangesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.byoipRangeId">byoipRangeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipRangeId`<sup>Required</sup> <a name="byoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.byoipRangeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreByoipAllocatedRangesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRanges;

DataOciCoreByoipAllocatedRanges.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRanges;

DataOciCoreByoipAllocatedRanges.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRanges;

DataOciCoreByoipAllocatedRanges.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRanges;

DataOciCoreByoipAllocatedRanges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreByoipAllocatedRanges.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreByoipAllocatedRanges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreByoipAllocatedRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreByoipAllocatedRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection">byoipAllocatedRangeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput">byoipRangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId">byoipRangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `byoipAllocatedRangeCollection`<sup>Required</sup> <a name="byoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList getByoipAllocatedRangeCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter"></a>

```java
public DataOciCoreByoipAllocatedRangesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a>

---

##### `byoipRangeIdInput`<sup>Optional</sup> <a name="byoipRangeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput"></a>

```java
public java.lang.String getByoipRangeIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `byoipRangeId`<sup>Required</sup> <a name="byoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId"></a>

```java
public java.lang.String getByoipRangeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection;

DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection.builder()
    .build();
```


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems;

DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems.builder()
    .build();
```


### DataOciCoreByoipAllocatedRangesConfig <a name="DataOciCoreByoipAllocatedRangesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesConfig;

DataOciCoreByoipAllocatedRangesConfig.builder()
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
    .byoipRangeId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreByoipAllocatedRangesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId">byoipRangeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `byoipRangeId`<sup>Required</sup> <a name="byoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId"></a>

```java
public java.lang.String getByoipRangeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreByoipAllocatedRangesFilter <a name="DataOciCoreByoipAllocatedRangesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesFilter;

DataOciCoreByoipAllocatedRangesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId">publicIpPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `publicIpPoolId`<sup>Required</sup> <a name="publicIpPoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId"></a>

```java
public java.lang.String getPublicIpPoolId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a>

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a>

---


### DataOciCoreByoipAllocatedRangesFilterList <a name="DataOciCoreByoipAllocatedRangesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesFilterList;

new DataOciCoreByoipAllocatedRangesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get"></a>

```java
public DataOciCoreByoipAllocatedRangesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>>

---


### DataOciCoreByoipAllocatedRangesFilterOutputReference <a name="DataOciCoreByoipAllocatedRangesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_byoip_allocated_ranges.DataOciCoreByoipAllocatedRangesFilterOutputReference;

new DataOciCoreByoipAllocatedRangesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter">DataOciCoreByoipAllocatedRangesFilter</a>

---



