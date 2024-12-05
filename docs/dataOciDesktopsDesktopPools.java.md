# `dataOciDesktopsDesktopPools` Submodule <a name="`dataOciDesktopsDesktopPools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPools <a name="DataOciDesktopsDesktopPools" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools oci_desktops_desktop_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPools;

DataOciDesktopsDesktopPools.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDesktopsDesktopPoolsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDesktopsDesktopPoolsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPools;

DataOciDesktopsDesktopPools.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPools;

DataOciDesktopsDesktopPools.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPools;

DataOciDesktopsDesktopPools.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPools;

DataOciDesktopsDesktopPools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDesktopsDesktopPools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDesktopsDesktopPools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDesktopsDesktopPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection">desktopPoolCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `desktopPoolCollection`<sup>Required</sup> <a name="desktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionList getDesktopPoolCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter"></a>

```java
public DataOciDesktopsDesktopPoolsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolsConfig <a name="DataOciDesktopsDesktopPoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsConfig;

DataOciDesktopsDesktopPoolsConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDesktopsDesktopPoolsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

### DataOciDesktopsDesktopPoolsDesktopPoolCollection <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollection;

DataOciDesktopsDesktopPoolsDesktopPoolCollection.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig;

DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig.builder()
    .build();
```


### DataOciDesktopsDesktopPoolsFilter <a name="DataOciDesktopsDesktopPoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsFilter;

DataOciDesktopsDesktopPoolsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule">startSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule">stopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startSchedule`<sup>Required</sup> <a name="startSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList getStartSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a>

---

##### `stopSchedule`<sup>Required</sup> <a name="stopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList getStopSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode">audioMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode">cdmMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode">clipboardMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled">isDisplayEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled">isKeyboardEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled">isPointerEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled">isPrintingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioMode`<sup>Required</sup> <a name="audioMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode"></a>

```java
public java.lang.String getAudioMode();
```

- *Type:* java.lang.String

---

##### `cdmMode`<sup>Required</sup> <a name="cdmMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode"></a>

```java
public java.lang.String getCdmMode();
```

- *Type:* java.lang.String

---

##### `clipboardMode`<sup>Required</sup> <a name="clipboardMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode"></a>

```java
public java.lang.String getClipboardMode();
```

- *Type:* java.lang.String

---

##### `isDisplayEnabled`<sup>Required</sup> <a name="isDisplayEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```java
public IResolvable getIsDisplayEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isKeyboardEnabled`<sup>Required</sup> <a name="isKeyboardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```java
public IResolvable getIsKeyboardEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPointerEnabled`<sup>Required</sup> <a name="isPointerEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled"></a>

```java
public IResolvable getIsPointerEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPrintingEnabled`<sup>Required</sup> <a name="isPrintingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```java
public IResolvable getIsPrintingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops">activeDesktops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers">arePrivilegedUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy">availabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails">contactDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled">isStorageEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize">maximumSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails">privateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions">sessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize">standbySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId">storageBackupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs">storageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled">timeStartScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled">timeStopScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost">useDedicatedVmHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDesktops`<sup>Required</sup> <a name="activeDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops"></a>

```java
public java.lang.Number getActiveDesktops();
```

- *Type:* java.lang.Number

---

##### `arePrivilegedUsers`<sup>Required</sup> <a name="arePrivilegedUsers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers"></a>

```java
public IResolvable getArePrivilegedUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `availabilityPolicy`<sup>Required</sup> <a name="availabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList getAvailabilityPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `contactDetails`<sup>Required</sup> <a name="contactDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails"></a>

```java
public java.lang.String getContactDetails();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList getDevicePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList getImage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a>

---

##### `isStorageEnabled`<sup>Required</sup> <a name="isStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled"></a>

```java
public IResolvable getIsStorageEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maximumSize`<sup>Required</sup> <a name="maximumSize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize"></a>

```java
public java.lang.Number getMaximumSize();
```

- *Type:* java.lang.Number

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateAccessDetails`<sup>Required</sup> <a name="privateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList getPrivateAccessDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a>

---

##### `sessionLifecycleActions`<sup>Required</sup> <a name="sessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList getSessionLifecycleActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a>

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList getShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `standbySize`<sup>Required</sup> <a name="standbySize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize"></a>

```java
public java.lang.Number getStandbySize();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageBackupPolicyId`<sup>Required</sup> <a name="storageBackupPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId"></a>

```java
public java.lang.String getStorageBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbs`<sup>Required</sup> <a name="storageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs"></a>

```java
public java.lang.Number getStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeStartScheduled`<sup>Required</sup> <a name="timeStartScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled"></a>

```java
public java.lang.String getTimeStartScheduled();
```

- *Type:* java.lang.String

---

##### `timeStopScheduled`<sup>Required</sup> <a name="timeStopScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled"></a>

```java
public java.lang.String getTimeStopScheduled();
```

- *Type:* java.lang.String

---

##### `useDedicatedVmHost`<sup>Required</sup> <a name="useDedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost"></a>

```java
public java.lang.String getUseDedicatedVmHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn">endpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointFqdn`<sup>Required</sup> <a name="endpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```java
public java.lang.String getEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">gracePeriodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `gracePeriodInMinutes`<sup>Required</sup> <a name="gracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```java
public java.lang.Number getGracePeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList getDisconnect();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList getInactivity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization">baselineOcpuUtilization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baselineOcpuUtilization`<sup>Required</sup> <a name="baselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```java
public java.lang.String getBaselineOcpuUtilization();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.String getMemoryInGbs();
```

- *Type:* java.lang.String

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.String getOcpus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDesktopsDesktopPoolsDesktopPoolCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a>

---


### DataOciDesktopsDesktopPoolsFilterList <a name="DataOciDesktopsDesktopPoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsFilterList;

new DataOciDesktopsDesktopPoolsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get"></a>

```java
public DataOciDesktopsDesktopPoolsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>>

---


### DataOciDesktopsDesktopPoolsFilterOutputReference <a name="DataOciDesktopsDesktopPoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_desktops_desktop_pools.DataOciDesktopsDesktopPoolsFilterOutputReference;

new DataOciDesktopsDesktopPoolsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>

---



