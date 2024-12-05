# `dataOciCoreVirtualNetworks` Submodule <a name="`dataOciCoreVirtualNetworks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualNetworks <a name="DataOciCoreVirtualNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks oci_core_virtual_networks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworks;

DataOciCoreVirtualNetworks.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciCoreVirtualNetworksFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#compartment_id DataOciCoreVirtualNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#display_name DataOciCoreVirtualNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#id DataOciCoreVirtualNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#state DataOciCoreVirtualNetworks#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#compartment_id DataOciCoreVirtualNetworks#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#display_name DataOciCoreVirtualNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#filter DataOciCoreVirtualNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#id DataOciCoreVirtualNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#state DataOciCoreVirtualNetworks#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreVirtualNetworksFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworks;

DataOciCoreVirtualNetworks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworks;

DataOciCoreVirtualNetworks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworks;

DataOciCoreVirtualNetworks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworks;

DataOciCoreVirtualNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreVirtualNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreVirtualNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreVirtualNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreVirtualNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList">DataOciCoreVirtualNetworksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.virtualNetworks">virtualNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList">DataOciCoreVirtualNetworksVirtualNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.filter"></a>

```java
public DataOciCoreVirtualNetworksFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList">DataOciCoreVirtualNetworksFilterList</a>

---

##### `virtualNetworks`<sup>Required</sup> <a name="virtualNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.virtualNetworks"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworksList getVirtualNetworks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList">DataOciCoreVirtualNetworksVirtualNetworksList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualNetworksConfig <a name="DataOciCoreVirtualNetworksConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksConfig;

DataOciCoreVirtualNetworksConfig.builder()
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
//  .filter(java.util.List<DataOciCoreVirtualNetworksFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#compartment_id DataOciCoreVirtualNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#display_name DataOciCoreVirtualNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#id DataOciCoreVirtualNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#state DataOciCoreVirtualNetworks#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#compartment_id DataOciCoreVirtualNetworks#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#display_name DataOciCoreVirtualNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#filter DataOciCoreVirtualNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#id DataOciCoreVirtualNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#state DataOciCoreVirtualNetworks#state}.

---

### DataOciCoreVirtualNetworksFilter <a name="DataOciCoreVirtualNetworksFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksFilter;

DataOciCoreVirtualNetworksFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#name DataOciCoreVirtualNetworks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#values DataOciCoreVirtualNetworks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#regex DataOciCoreVirtualNetworks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#name DataOciCoreVirtualNetworks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#values DataOciCoreVirtualNetworks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_networks#regex DataOciCoreVirtualNetworks#regex}.

---

### DataOciCoreVirtualNetworksVirtualNetworks <a name="DataOciCoreVirtualNetworksVirtualNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworks;

DataOciCoreVirtualNetworksVirtualNetworks.builder()
    .build();
```


### DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails <a name="DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails;

DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualNetworksFilterList <a name="DataOciCoreVirtualNetworksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksFilterList;

new DataOciCoreVirtualNetworksFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.get"></a>

```java
public DataOciCoreVirtualNetworksFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>>

---


### DataOciCoreVirtualNetworksFilterOutputReference <a name="DataOciCoreVirtualNetworksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksFilterOutputReference;

new DataOciCoreVirtualNetworksFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksFilter">DataOciCoreVirtualNetworksFilter</a>

---


### DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList <a name="DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList;

new DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.get"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference <a name="DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference;

new DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.byoipv6RangeId">byoipv6RangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails">DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byoipv6RangeId`<sup>Required</sup> <a name="byoipv6RangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.byoipv6RangeId"></a>

```java
public java.lang.String getByoipv6RangeId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails">DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetails</a>

---


### DataOciCoreVirtualNetworksVirtualNetworksList <a name="DataOciCoreVirtualNetworksVirtualNetworksList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworksList;

new DataOciCoreVirtualNetworksVirtualNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.get"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreVirtualNetworksVirtualNetworksOutputReference <a name="DataOciCoreVirtualNetworksVirtualNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_virtual_networks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference;

new DataOciCoreVirtualNetworksVirtualNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.byoipv6CidrBlocks">byoipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.byoipv6CidrDetails">byoipv6CidrDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList">DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultDhcpOptionsId">defaultDhcpOptionsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultSecurityListId">defaultSecurityListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.dnsLabel">dnsLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.ipv6PrivateCidrBlocks">ipv6PrivateCidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.isIpv6Enabled">isIpv6Enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.isOracleGuaAllocationEnabled">isOracleGuaAllocationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.vcnDomainName">vcnDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworks">DataOciCoreVirtualNetworksVirtualNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byoipv6CidrBlocks`<sup>Required</sup> <a name="byoipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.byoipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getByoipv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `byoipv6CidrDetails`<sup>Required</sup> <a name="byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.byoipv6CidrDetails"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList getByoipv6CidrDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList">DataOciCoreVirtualNetworksVirtualNetworksByoipv6CidrDetailsList</a>

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `defaultDhcpOptionsId`<sup>Required</sup> <a name="defaultDhcpOptionsId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultDhcpOptionsId"></a>

```java
public java.lang.String getDefaultDhcpOptionsId();
```

- *Type:* java.lang.String

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultRouteTableId"></a>

```java
public java.lang.String getDefaultRouteTableId();
```

- *Type:* java.lang.String

---

##### `defaultSecurityListId`<sup>Required</sup> <a name="defaultSecurityListId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.defaultSecurityListId"></a>

```java
public java.lang.String getDefaultSecurityListId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.dnsLabel"></a>

```java
public java.lang.String getDnsLabel();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6PrivateCidrBlocks`<sup>Required</sup> <a name="ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.ipv6PrivateCidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6PrivateCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isIpv6Enabled`<sup>Required</sup> <a name="isIpv6Enabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.isIpv6Enabled"></a>

```java
public IResolvable getIsIpv6Enabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOracleGuaAllocationEnabled`<sup>Required</sup> <a name="isOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.isOracleGuaAllocationEnabled"></a>

```java
public IResolvable getIsOracleGuaAllocationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.securityAttributes"></a>

```java
public StringMap getSecurityAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `vcnDomainName`<sup>Required</sup> <a name="vcnDomainName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.vcnDomainName"></a>

```java
public java.lang.String getVcnDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworksOutputReference.property.internalValue"></a>

```java
public DataOciCoreVirtualNetworksVirtualNetworks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualNetworks.DataOciCoreVirtualNetworksVirtualNetworks">DataOciCoreVirtualNetworksVirtualNetworks</a>

---



