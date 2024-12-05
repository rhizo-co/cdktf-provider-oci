# `dataOciCoreIpInventoryVcnOverlaps` Submodule <a name="`dataOciCoreIpInventoryVcnOverlaps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventoryVcnOverlaps <a name="DataOciCoreIpInventoryVcnOverlaps" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps oci_core_ip_inventory_vcn_overlaps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlaps;

DataOciCoreIpInventoryVcnOverlaps.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentList(java.util.List<java.lang.String>)
    .regionList(java.util.List<java.lang.String>)
    .vcnId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreIpInventoryVcnOverlapsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.compartmentList">compartmentList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentList`<sup>Required</sup> <a name="compartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.compartmentList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.regionList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreIpInventoryVcnOverlapsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlaps;

DataOciCoreIpInventoryVcnOverlaps.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlaps;

DataOciCoreIpInventoryVcnOverlaps.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlaps;

DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlaps;

DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreIpInventoryVcnOverlaps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreIpInventoryVcnOverlaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventoryVcnOverlaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary">ipInventoryVcnOverlapSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount">overlapCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput">compartmentListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput">regionListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList">compartmentList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter"></a>

```java
public DataOciCoreIpInventoryVcnOverlapsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a>

---

##### `ipInventoryVcnOverlapSummary`<sup>Required</sup> <a name="ipInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary"></a>

```java
public DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList getIpInventoryVcnOverlapSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `overlapCount`<sup>Required</sup> <a name="overlapCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount"></a>

```java
public java.lang.Number getOverlapCount();
```

- *Type:* java.lang.Number

---

##### `compartmentListInput`<sup>Optional</sup> <a name="compartmentListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput"></a>

```java
public java.util.List<java.lang.String> getCompartmentListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput"></a>

```java
public java.util.List<java.lang.String> getRegionListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentList`<sup>Required</sup> <a name="compartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList"></a>

```java
public java.util.List<java.lang.String> getCompartmentList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList"></a>

```java
public java.util.List<java.lang.String> getRegionList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventoryVcnOverlapsConfig <a name="DataOciCoreIpInventoryVcnOverlapsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsConfig;

DataOciCoreIpInventoryVcnOverlapsConfig.builder()
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
    .compartmentList(java.util.List<java.lang.String>)
    .regionList(java.util.List<java.lang.String>)
    .vcnId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreIpInventoryVcnOverlapsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList">compartmentList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList">regionList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentList`<sup>Required</sup> <a name="compartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList"></a>

```java
public java.util.List<java.lang.String> getCompartmentList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList"></a>

```java
public java.util.List<java.lang.String> getRegionList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventoryVcnOverlapsFilter <a name="DataOciCoreIpInventoryVcnOverlapsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsFilter;

DataOciCoreIpInventoryVcnOverlapsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}.

---

### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary;

DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventoryVcnOverlapsFilterList <a name="DataOciCoreIpInventoryVcnOverlapsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsFilterList;

new DataOciCoreIpInventoryVcnOverlapsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get"></a>

```java
public DataOciCoreIpInventoryVcnOverlapsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>>

---


### DataOciCoreIpInventoryVcnOverlapsFilterOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference;

new DataOciCoreIpInventoryVcnOverlapsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList;

new DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get"></a>

```java
public DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_ip_inventory_vcn_overlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference;

new DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr">overlappingCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId">overlappingVcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName">overlappingVcnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `overlappingCidr`<sup>Required</sup> <a name="overlappingCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr"></a>

```java
public java.lang.String getOverlappingCidr();
```

- *Type:* java.lang.String

---

##### `overlappingVcnId`<sup>Required</sup> <a name="overlappingVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId"></a>

```java
public java.lang.String getOverlappingVcnId();
```

- *Type:* java.lang.String

---

##### `overlappingVcnName`<sup>Required</sup> <a name="overlappingVcnName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName"></a>

```java
public java.lang.String getOverlappingVcnName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue"></a>

```java
public DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a>

---



